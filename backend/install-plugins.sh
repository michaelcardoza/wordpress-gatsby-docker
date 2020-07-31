#!/bin/bash

# shellcheck disable=SC2034
RED="\033[1;31m"
GREEN="\033[1;32m"
NOCOLOR="\033[0m"

# shellcheck disable=SC2034
SSH_PARAMS="-o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no"

# Export the vars in .env into your shell:
echo -e "${GREEN}""-- BUILDING With .env file --""${NOCOLOR}"
# shellcheck disable=SC2046
# shellcheck disable=SC2196
export $(egrep -v '^#' .env | xargs)

echo -e "${GREEN}""2.9 ---- Set permissions""${NOCOLOR}"
docker exec -i "${APP_NAME}"_wordpress sh -c 'chown www-data:www-data -R wp-content'

echo -e "${GREEN}""2.9 ---- Initial Plugins""${NOCOLOR}"
docker exec -i "${APP_NAME}"_cli sh -c "wp plugin install local-plugins/wp-graphql.zip --force --allow-root --activate"
#docker exec -i "${APP_NAME}"_cli sh -c "wp plugin install local-plugins/advanced-custom-fields-pro.zip --force --allow-root --activate"
docker exec -i "${APP_NAME}"_cli sh -c "wp plugin install advanced-custom-fields --activate"
docker exec -i "${APP_NAME}"_cli sh -c "wp plugin install acf-to-rest-api --activate"
