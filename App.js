import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/home';
import Question1 from './src/screens/question/question1';
import Question2 from './src/screens/question/question2';
import Question3 from './src/screens/question/question3';
import Question4 from './src/screens/question/question4';
import Question5 from './src/screens/question/question5';
import Question6 from './src/screens/question/question6';
import Question7 from './src/screens/question/question7';
import Question8 from './src/screens/question/question8';
import Question9 from './src/screens/question/question9';
import Question10 from './src/screens/question/question10';
import Finish from './src/screens/finish';
import {Provider} from 'react-redux';
import store from './src/_redux/storage';
const Stack = createStackNavigator();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator headerMode="none">
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Question1" component={Question1} />
                        <Stack.Screen name="Question2" component={Question2} />
                        <Stack.Screen name="Question3" component={Question3} />
                        <Stack.Screen name="Question4" component={Question4} />
                        <Stack.Screen name="Question5" component={Question5} />
                        <Stack.Screen name="Question6" component={Question6} />
                        <Stack.Screen name="Question7" component={Question7} />
                        <Stack.Screen name="Question8" component={Question8} />
                        <Stack.Screen name="Question9" component={Question9} />
                        <Stack.Screen
                            name="Question10"
                            component={Question10}
                        />
                        <Stack.Screen name="Finish" component={Finish} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}

export default App;
