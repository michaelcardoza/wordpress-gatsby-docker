Accesos WP:
- user: admin
- pass: 123456

Accesos PHPMyAdmin:
- user: root
- pass: root

#### Docker
Renombrar el archivo backend/.env.example por .env antes de ejecutar docker

Hacer un import de la base de datos con PHPMyAdmin o desde consola.

Ejecutar el archivo install-plugins.sh para instalar los plugins necesarios

#### Local
Configurar el host del sistema operativo, solo si se quiere trabajar con servidor local.
Windows 'C:\Windows\System32\drivers\etc\hosts':
1. Editar el archivo hosts
2. Agregar `127.0.0.1       wp-gatsby.local`
