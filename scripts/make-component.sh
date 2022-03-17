snakeCase=$(echo $1        \
     | sed 's/\(.\)\([A-Z]\)/\1-\2/g' \
     | tr '[:upper:]' '[:lower:]')

mkdir ../components/$snakeCase 

touch ../components/$snakeCase/$1.js
touch ../components/$snakeCase/$1.module.css

cat >> ../components/$snakeCase/$1.js << EOF
import styles from './$1.module.css';

export default function $1() {
  return <div></div>
}
EOF

cat >> ../components/$snakeCase/$1.module.css << EOF
.$1 {
}
EOF
