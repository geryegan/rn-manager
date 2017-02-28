import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={{ backgroundColor: '#FFF' }} sceneStyle={{ paddingTop: 55 }}>
        <Scene key='auth'>
            <Scene key="login" component={LoginForm} title="Login" />
        </Scene>

        <Scene key='main'>
            <Scene 
            key="employeeList" 
            component={EmployeeList} 
            title="Employees" 
            rightTitle='+' 
            onRight={() => { Actions.createEmployee(); }}
            />
            <Scene 
            key="createEmployee" 
            component={CreateEmployee} 
            title="Create Employee" 
            />
        </Scene>

    </Router>
  );
};

export default RouterComponent;
