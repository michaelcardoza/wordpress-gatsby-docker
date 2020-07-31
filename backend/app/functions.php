<?php

add_action( 'after_setup_theme', function() {
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );

    register_nav_menus( array(
        'menu-header'   => __( 'Menu Principal' ),
        'menu-footer'   => __( 'Menu Pie de pagina' ),
    ));

    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'align-wide' );
    add_theme_support( 'editor-styles' );
});

/**
 * ACF | Save fields JSON
 * */
add_filter('acf/settings/save_json', function ($path) {
    $path = get_theme_file_path('/acf-fields');

    return $path;
});

/**
 * ACF | Load fields JSON
 * */
add_filter('acf/settings/load_json', function ($paths) {
    unset($paths[0]);

    $paths[] = get_theme_file_path('/acf-fields');

    return $paths;
});

/*
 * Post type: Services
 * */
function custom_post_type_services() {
    $settings = [
        'name_post_type_plural'   => 'Services',
        'name_post_type_Singular' => 'Service',
        'name_register_post_type' => 'service',
        'rewrite_slug'            => 'services',
        'supports_post_type'      => [ 'title', 'editor', 'thumbnail', 'excerpt' ],
        'taxonomy_post_type'      => [],
        'menu_icon_post_type'     => 'dashicons-megaphone',
        'text_domain'             => 'text_domain'
    ];

    $labels = [
        'name'                  => _x( $settings['name_post_type_plural'], 'Post Type General Name', $settings['text_domain'] ),
        'singular_name'         => _x( $settings['name_post_type_Singular'], 'Post Type Singular Name', $settings['text_domain'] ),
        'menu_name'             => __( $settings['name_post_type_plural'], $settings['text_domain'] ),
        'name_admin_bar'        => __( $settings['name_post_type_Singular'], $settings['text_domain'] )
    ];

    $rewrite = [
        'slug'                  => $settings['rewrite_slug'],
        'with_front'            => true,
        'pages'                 => true,
        'feeds'                 => true
    ];

    $args = [
        'label'                 => __( $settings['name_post_type_Singular'], $settings['text_domain'] ),
        'labels'                => $labels,
        'supports'              => $settings['supports_post_type'],
        'taxonomies'            => $settings['taxonomy_post_type'],
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => $settings['menu_icon_post_type'],
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'rewrite'               => $rewrite,
        'capability_type'       => 'page',
        'show_in_rest'          => true,
        'rest_base'             => 'services'
    ];

    register_post_type( $settings['name_register_post_type'], $args );
}
add_action( 'init', 'custom_post_type_services', 0 );
