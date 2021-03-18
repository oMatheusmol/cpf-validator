# cpf-validator
CPF
Vamos começar trabalhando com um CPF, usando de exemplo o número: 145.382.206-20

Validando o primeiro dígito verificador
O cálculo de validação do CPF é bem direto. Ele funciona através de pesos associados a cada número e uma divisão pelo número primo 11 ao final. Vamos vê-lo em etapas.

Começamos utilizando os 9 primeiros dígitos multiplicando-os pela sequência decrescente de 10 à 2 e somamos esse resultado.

1	4	5	3	8	2	2	0	6
X	X	X	X	X	X	X	X	X
10	9	8	7	6	5	4	3	2
10	36	40	21	48	10	8	0	12
10 + 36 + 40 + 21 + 48 + 10 + 8 + 0 + 12 = 185
Com esse resultado em mãos, vamos dividí-lo por 11, mas o importante para nós não é resultado, mas sim o módulo (resto) da divisão.

185 % 11 = 9
O resto da divisão é 9. Agora para calcular o dígito verificador vamos subtrair este resto do número 11:

11 - 9 = 2
Como o resultado da da subtração foi 2, o primeiro dígito verificador é igual a 2. Caso o resultado dessa divisão for 10 ou maior, o penúltimo dígito verificador será o 0.

Pronto! Confirmamos que nosso primeiro dígito verificador é válido.

Validando o segundo dígito verificador
A validação do segundo dígito é semelhante a primeira, porém vamos considerar o primeiro dígito verificador calculado anteriormente. Por isso a multiplicação é feita de 11 à 2.

1	4	5	3	8	2	2	0	6	2
X	X	X	X	X	X	X	X	X	X
11	10	9	8	7	6	5	4	3	2
11	40	45	24	56	12	10	0	18	4
11 + 40 + 45 + 24 + 56 + 12 + 10 + 0 + 18 + 4 = 220
Novamente vamos efetuar a divisão por 11 usando o módulo:

220 % 11 = 0
E vamos fazer a subtração:

11 - 0 = 11
Como o valor é igual ou maior que 10, o último dígito é 0.

Assim, confirmamos os dois dígitos verificadores do nosso CPF 145.382.206-20 e sabemos que esse CPF é válido. Outra regra muito importante é que CPFs com números iguais como: 111.111.111-11, 222.222.222-22, entre outros, são CPFs válidos pelo algoritmo mas não existem no registro oficial. Assim esse tipo de CPF não pode ser usado.
