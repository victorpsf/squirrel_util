# Squirrel Util

Biblioteca de Utilitarios

## Conteudo

- [Valores Randomicos](#valores-randomicos)
- [Verificação de valores](#verificação-de-valores)
- [MimeType valores](#mimetype-valores)

### Valores Randomicos

Por enquanto apenas temos suporte a valores randomicos inteiros e string com suporte a caracteres, numeros, e super caracteres.

``` js
const { Random } = require('squirrel_util')

const random = new Random()

// valores de 0 a 20
// podendo ser 20
console.log(
  random.GetNumeric(0, 20)
)
// output: 15

// obtem uma string randomica com 20 caracteres
console.log(
  random.GetString(20)
)
// output: IB48|26Vq46!=d}qR§o@
```

### Verificação de valores

- [GetType](#gettype)
- [IsArray](#isarray)
- [IsBoolean](#isboolean)
- [IsBuffer](#isbuffer)
- [IsDate](#isdate)
- [IsEmpty](#isempty)
- [IsFunction](#isfunction)
- [IsNumber](#isnumber)
- [IsObject](#isobject)
- [IsString](#isstring)
- [Equal](#equal)

#### GetType

obtem o tipo do valor

``` js
const { Types } = require('squirrel_util')

console.log(
  Types("teste").GetType()
)
// 'string'

console.log(
  Types([1]).GetType()
)
// 'object'

console.log(
  Types({}).GetType()
)
// 'object'
```

#### IsArray

verifica se é array

``` js
const { Types } = require('squirrel_util')

console.log(
  Types("teste").IsArray()
)
// false

console.log(
  Types([1]).IsArray()
)
// true

console.log(
  Types({}).IsArray()
)
// false
```

#### IsBoolean

verifica se é boolean

``` js
const { Types } = require('squirrel_util')

console.log(
  Types("teste").IsBoolean()
)
// false

console.log(
  Types([1]).IsBoolean()
)
// true

console.log(
  Types(false).IsBoolean()
)
// true
```

#### IsBuffer

verifica se é buffer

``` js
const { Types } = require('squirrel_util')

console.log(
  Types("teste").IsBuffer()
)
// false

console.log(
  Types([1]).IsBuffer()
)
// false

console.log(
  Types(Buffer.from([1,0,1])).IsBuffer()
)
// true
```

#### IsDate

verifica se é data

``` js
const { Types } = require('squirrel_util')

console.log(
  Types(new Date()).IsDate()
)
// true

console.log(
  Types([1]).IsDate()
)
// false

console.log(
  Types(false).IsDate()
)
// false
```

#### IsEmpty

verifica se é nulo ou indefinido

``` js
const { Types } = require('squirrel_util')

console.log(
  Types(new Date()).IsEmpty()
)
// false

console.log(
  Types(undefined).IsEmpty()
)
// true

console.log(
  Types(null).IsEmpty()
)
// true
```

#### IsFunction

verifica se é função

``` js
const { Types } = require('squirrel_util')

console.log(
  Types(new Date()).IsFunction()
)
// false

console.log(
  Types(undefined).IsFunction()
)
// false

console.log(
  Types(function () {}).IsFunction()
)
// true
```

#### IsNumber

verifica se é numerico

``` js
const { Types } = require('squirrel_util')

console.log(
  Types(new Date()).IsNumber()
)
// false

console.log(
  Types(undefined).IsNumber()
)
// false

console.log(
  Types(0).IsNumber()
)
// true
```

#### IsObject

verifica se é object

``` js
const { Types } = require('squirrel_util')

console.log(
  Types(new Date()).IsObject()
)
// false

console.log(
  Types({}).IsObject()
)
// true

console.log(
  Types(0).IsObject()
)
// true
```

#### IsString

verifica se é string

``` js
const { Types } = require('squirrel_util')

console.log(
  Types(new Date()).IsString()
)
// false

console.log(
  Types("").IsString()
)
// true

console.log(
  Types(0).IsString()
)
// true
```

#### GetType

Não verifica igualdade de valor mas sim te tipo de valor.

ex:

<ul>
  <li>
    string === number = false
  </li>
  <li>
    string === string = true
  </li>
  <li>
    string === undefined = false
  </li>
</ul>

Lembrando que a verificação vai pelo construtor da classe e não pelo tipo, exemplo: 

<ul>
  <li>
    "5".constructor === 5.constructor
  </li>
</ul>

Não tente reproduzir este caso ele pode dar erro, mas é uma representação de verificação desta função.

``` js
const { Types } = require('squirrel_util')

console.log(
  Types.Equal("5", 5)
)
// false

console.log(
  Types.Equal("5", "5")
)
// true

console.log(
  Types.Equal("5", undefined)
)
// false
```

### MimeType valores

verifica o tipo de mimetype do valor

``` js
const { ValueMime } = require('squirrel_util')

console.log(
  ValueMime("teste")
)
// 'text/plain'

console.log(
  ValueMime(5)
)
// 'text/plain'

console.log(
  ValueMime({})
)
// 'application/json'

console.log(
  ValueMime([])
)
// 'application/json'

console.log(
  ValueMime(Buffer.from([1,0,1]))
)
// 'application/octet-stream'
```
