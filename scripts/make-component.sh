snakeCase=$(echo $1        \
     | sed 's/\(.\)\([A-Z]\)/\1-\2/g' \
     | tr '[:upper:]' '[:lower:]')

mkdir ../components/$snakeCase 

touch ../components/$1.js
touch ../components/$1.module.css

cat >> ../components/$1.js << EOF
export default function $1() {
  return <div></div>
}
EOF

cat >> ../components/$1.module.css << EOF
.$1 {
}
EOF
