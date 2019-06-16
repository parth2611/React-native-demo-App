import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, SearchBar, search } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Card, CardItem, Thumbnail, ListItem, List, Form, Textarea, Item, Input } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import News from '../../Images/news1.jpg';
import Land from '../../Images/land.jpg';
export default class EnvironmentalFeed extends Component {

    static navigationOptions = {
        title: 'Category',
    };

    render() {

        return (
            <ScrollView>
            <View>
                <Card style={{ flex: 0 }}>
                    <CardItem cardBody>
                        <Image source={News} style={{ height: 250, width: null, flex: 1 }} />
                    </CardItem>
                </Card>
            </View>

            {/* Bottom After first card */}
                <Container style={{ padding: 10 }}>
                    <Content style={{ flex: 1 }}>
                        <Card >
                           
                           {/* <Image
                                source={Land}
                                style={{ height: 100, width: 100, flex: 1 }}
                           />
                            <Text>Land</Text>

                            <Image
                                source={Land}
                                style={{ height: 100, width: 100, flex: 1 }}
                            />
                            <Text>Energy</Text>
                            <Text>Water</Text>
                            <Text>Air</Text> */}

                            <FlatList
                                style={{ flex: 1 }}
                               numColumns = "2"
                                data={[{ key: 'Land' }, { key: 'Water' }, { key: 'Air' }, { key: 'Energy' }]}
                                renderItem={({ item }) => 
                                            <Text>
                                                <Image
                                                    source={Land}
                                                    style={{ height: 100, width: 100, flex: 1 }}
                                        />{"\n\n\n\n"}
                                            {item.key}
                                            
                                            </Text>
                            }

                            />
                          
                        </Card>
                        
                    </Content>

                
                </Container>

            </ScrollView>

        );
    }
}

const styles = {

    Container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    }

}