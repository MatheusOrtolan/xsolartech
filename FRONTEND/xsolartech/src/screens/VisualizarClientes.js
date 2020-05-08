//Importando Requisitos
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Icon_trash from 'react-native-vector-icons/Feather';
import Icon_edit from 'react-native-vector-icons/Feather';

//Criando Classe VisualizarCliente e extendendo componente
export default class VisualizarCliente extends Component{

//Construtor
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            dataSource:[]
        }
    }

//Fetch Visualizar todos os Clientes
    fetchProcesso = () => {
        const url = 'http://10.0.2.2:3333/visualizar';
        fetch(url,)
        .then((response) => response.json())
        .then((responseJson) =>{
            this.setState({
                isLoading: true,
                dataSource: responseJson
            })
        })
    }

//Fetch Deletar Cliente por Nome
    deletarCliente(name){
        console.log(name);
        fetch('http://10.0.2.2:3333/delete/'+name, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }

//Renderização Flatlist
    renderItem = ({item}) => {
        
        return(

            <View style={styles.item}>
                <View style={styles.boxTexts}> 
                    <Text style={styles.texts}>
                        Nome: {item.name}
                    </Text>

                    <Text style={styles.texts}>
                        Cpf: {item.cpf}
                    </Text>

                    <Text style={styles.texts}>
                        Telefone: {item.tel}
                    </Text>

                    <Text style={styles.texts}>
                        E-mail: {item.email}
                    </Text>

                    <Text style={styles.texts}>
                        Endereço Primário: {item.end}
                    </Text>

                    <Text style={styles.texts}>
                        Endereço Secundário: {item.endsec}
                    </Text>
                </View>
                <View style={styles.boxButtons}> 
                    <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('EditarCliente', {postId: item._id})}>
                        <Icon_edit size={30} color="white" name="edit-2" style={styles.icon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons} onPress={() => this.deletarCliente(item.name)}>
                        <Icon_trash size={30} color="red" name="trash" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>   
        ) 
    }

//Renderização da Classe VisualizarClientes
    render(){

//Chamando a Fetch para Visualizar os Clientes
        this.fetchProcesso();

            return (

                <View style={styles.container}>
        
                    <View style={styles.box}>

                        <FlatList
                            data={this.state.dataSource}
                            keyExtractor={(item) => item.name} 
                            renderItem={this.renderItem}        
                        />
                            
                    </View>

                </View>
            )
    }
}
        
//Estilso da Screen VisualizarCliente
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#BA91F6'
    },

    box: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

    item:{
        padding: 12,
        marginTop: 5,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor:'#A171E6'
    },

    boxTexts:{
        marginLeft: 5,
        flex:1
    },

    texts:{
        fontSize: 15,
        fontWeight: 'bold'
    },

    boxButtons:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center'
    },

    buttons:{
        fontSize: 30,
        margin: 10
    }
})
