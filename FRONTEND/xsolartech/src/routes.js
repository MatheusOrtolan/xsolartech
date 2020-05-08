//Importando Requisitos
import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';

//Importando Screens
import Home from './screens/Home';
import CadastrarCliente from './screens/CadastrarCliente';
import VisualizarClientes from './screens/VisualizarClientes';
import EditarCliente from './screens/EditarCliente';

//Criando StackNavigator
const Stack = createStackNavigator();

//Função rotas de navegação
export default function Routes(){
    return (

        <Stack.Navigator 
            initialRouteName="Home" 
            screenOptions={{ 
                headerTitleAlign: 'center',
                headerStyle:{backgroundColor: '#7159c1', },
                headerTitleStyle: {color: 'white',}
            }}
        >

            <Stack.Screen 
                name="X Solar Tech" 
                component={Home} 
                
            />
            
            <Stack.Screen 
                name="CadastrarCliente" 
                component={CadastrarCliente} 
            />
      
            <Stack.Screen 
                name="VisualizarClientes" 
                component={VisualizarClientes}
            />

            
            <Stack.Screen 
                name="EditarCliente" 
                component={EditarCliente}
            />

        </Stack.Navigator>
    )
}