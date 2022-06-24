str=$1
IFS='.'

read -a starr <<< "$str"
echo "${starr[0]}"