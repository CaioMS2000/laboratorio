#!/usr/bin/zsh

[[$# -eq 0]] && echo "ERRO: This script require an argument" && exit 1
[[$# -ne 1]] && echo "ERRO: This script require only one argument" && exit 1
[[-f $1]] && echo "ERRO: This archive already exist" && exit 1

echo '#!/usr/bin/zsh'>$1
chmod +x $1