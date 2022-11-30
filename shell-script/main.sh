#!/usr/bin/bash
function name_without_extension(){
    name=""
    name_with_extension=$1

    for ((i=0; i<${#name_with_extension}; i++)); do
        if [ ${name_with_extension:$i:1} != '.' ]
        then
            name="${name}${name_with_extension:$i:1}"
        else
            break
        fi
    done

    # return $name
    echo $name
}

echo "result is $(name_without_extension $1)"

# function name_without_extension(){
#     filename=$(basename -- "$1")
#     extension="${filename##*.}"
#     filename="${filename%.*}"

#     echo $filename
# }

. m.sh
source m.sh