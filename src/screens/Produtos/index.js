import React from "react";
import { View, Text } from 'react-native'

const prods = [
    {
        produto: "Aspirador de Pó - R$167,00"
    },
    {
        produto: "Ventilador - R$169,00"
    },
    {
        produto: "Centrifuga - R$349,00"
    },
    {
        produto: "Sanduicheira - R$79,90"
    },
]

function Produtos() {


  return (
   
      <View> 
          <Text>Produtos</Text>
        {
            prods.map((prods, index) =>
            <Text key={index}>{prods.produto}</Text>  

            )
        }
            
       </View>
  )
}

export default Produtos;