//Importando Requisitos
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { Input } from 'react-native-elements';

//Função Cadastrar Cliente
export default function CadastrarCliente({navigation}){

//Constantes
        const [name, setName] = useState('');
        const [cpf, setCpf] = useState('');
        const [tel, setTel] = useState('');
        const [email, setEmail] = useState('');
        const [end, setEnd] = useState('');
        const [endsec, setEndSec] = useState('');

//Função que verifica se o cadastro foi realizado, e assim manda o e-mail de confirmação
        function verificaEnvioCliente(res){
            if(res.ok){
                
                fetch("http://10.0.2.2:3333/send-email",{
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                })

            }
            else{
                throw MyCustomError(res.statusText);
            }
        }        
        
//Função que realiza o cadastro do cliente        
        function enviarCliente(){
                fetch("http://10.0.2.2:3333/clientes",{
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        "name":name,
                        "cpf":cpf,
                        "tel":tel,
                        "email":email,
                        "end":end,
                        "endsec": endsec
                    })
                })
                .then(verificaEnvioCliente)
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                })
        }

//Função de Navegação para a screen VisualizarClientes
        function navigateToVisualizar() {
            navigation.navigate('VisualizarClientes');
          }

        return (

            <View style={styles.container}>
                    <View style={styles.box}>
                        <Input
                            placeholder='Nome' marginTop={20} value={name} onChangeText={(text)=>setName(text)}
                        />
                        
                        <Input
                            placeholder='Cpf' value={cpf} onChangeText={(text)=>setCpf(text)}
                        />
                        <Input
                            placeholder='Tel' value={tel} onChangeText={(text)=>setTel(text)}
                        />
                        <Input
                            placeholder='Email' value={email} onChangeText={(text)=>setEmail(text)}
                        />

                        
                        <Input
                            placeholder='End' value={end} onChangeText={(text)=>setEnd(text)}
                        />
                        
                        <Input
                            placeholder='EndSec' value={endsec} onChangeText={(text)=>setEndSec(text)}
                        />
                        

                        <TouchableOpacity style={styles.button} onPress={enviarCliente}>
                            <Text style={styles.buttonText}>Cadastrar Cliente</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={navigateToVisualizar}>
                            <Text style={styles.buttonText}>Visualizar Clientes</Text>
                        </TouchableOpacity>
                    </View>
             </View>
        )
    }

//Estilos da Screen CadastrarCliente   
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#BA91F6'
    },

    box: {
        flex:1,
        alignItems: 'center',
    },

    button:{
        width: '50%',
        backgroundColor: '#7159c1',
        padding: 10,
        margin: 4,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }, 

    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
})
