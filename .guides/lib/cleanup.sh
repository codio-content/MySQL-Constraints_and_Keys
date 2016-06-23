#!/bin/bash

#!/bin/bash
for NAME in "blog" "college" "school"
do
  echo "DROP DATABASE ${NAME};" | mysql
done