import React from "react";
//Importar os componentes que vamos utilizar
//View, StyleSheet, Text, TextInput, Button
import { View, 
         StyleSheet, 
         Text, 
         TextInput,
         TouchableOpacity} from 'react-native';

export default function Home(){
   return(
     <View style={styles.container}>
        <Text style={styles.titulo}>Projeto Soma</Text>

         <TextInput 
             placeholder="Digite um valor"
             style={styles.campo}
         />

        <TextInput 
             placeholder="Digite um valor"
             style={styles.campo}
         />

         <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Calcular</Text>
         </TouchableOpacity>

     </View>
   );
} //fecha a função Home

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#483D8B',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold'
    },

    campo:{
        backgroundColor: '#FFF',
        fontSize:25,
        marginTop: 38,
        borderRadius: 30,
        padding: 15
    },

    botao:{
        backgroundColor:'#FFFF00',
        padding:15,
        marginTop:50,
        width:200,
        alignItems:'center'
    },

    textoBotao:{
       color: '#483D8',
       fontSize: 17,
       fontWeight: 'bold'
    }

});



