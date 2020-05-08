//Importando Requisitos
import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { Input } from 'react-native-elements';

//Função Editar Cliente
export default function EditarCliente({route}){

//Parâmetro ID que veio da screen VisualizarClientes
        const { postId } = route.params;
       
//Constantes
        const [name, setName] = useState('');
        const [cpf, setCpf] = useState('');
        const [tel, setTel] = useState('');
        const [email, setEmail] = useState('');
        const [end, setEnd] = useState('');
        const [endsec, setEndSec] = useState('');

//Função Editar Clientes
        function editarClientes(id){

            fetch('http://10.0.2.2:3333/clientes/update/'+id, {
                method: 'POST',
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
            .then(res => res.json())
            .then(res => console.log(res))
    }

    return(

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
                
                <TouchableOpacity style={styles.button} onPress={editarClientes(postId)}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            
            </View>

     </View>
    )
}

//Estilos da Screen EditarCliente
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#BA91F6'
    },

    box: {
        flex:1,
        alignItems: 'center'
    },

    button:{
        width: '50%',
        backgroundColor: '#7159c1',
        padding: 10,
        margin: 4,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }, 

    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
})
