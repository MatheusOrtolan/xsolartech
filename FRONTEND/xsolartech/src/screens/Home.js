//Importando Requisitos
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

//Função Home
export default function Home({navigation}){

 //Função de Navegação para a Screen VisualizarClientes   
        function navigateToVisualizar() {
            navigation.navigate('VisualizarClientes');
          }

//Função de Navegação para a Screen CadastrarCliente          
        function navigateToCadastrar() {
            navigation.navigate('CadastrarCliente');
          }    

        return (

            <View style={styles.container}>
 
                    <View style={styles.box}>
                        <Text style={styles.title}>Bem-vindo, João! :)</Text>
                    </View>

                    <View style={styles.box1}>
                        <TouchableOpacity style={styles.button} onPress={navigateToCadastrar}>
                            <Text style={styles.buttonText}>Cadastrar Cliente</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={navigateToVisualizar}>
                            <Text style={styles.buttonText}>Visualizar/Editar Clientes</Text>
                        </TouchableOpacity>
                    </View>

             </View>
        )
    }

//Estilos da Screen Home    
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#BA91F6'  
    },

    box:{
        height: '30%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    title:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },

    box1:{
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    button:{
        backgroundColor:'#7159c1',
        padding: 20,
        margin: 12,
        borderRadius: 5
    },

    buttonText:{
        color: 'white',
        fontSize: 20
    }
})
