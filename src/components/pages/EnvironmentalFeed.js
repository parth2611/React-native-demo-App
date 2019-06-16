import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet,Image ,Linking ,ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Card, CardItem, Thumbnail, ListItem, List, Form, Textarea, Item, Input } from 'native-base';
import User from '../../Images/user.png';
import News from '../../Images/news1.jpg';

export default class EnvironmentalFeed extends Component {

    static navigationOptions = {
        title: 'Feed',
    };

    render() {

        return (
            <ScrollView>
            <Container style={{padding:10}}>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <Left>
                            <Thumbnail source={User} />
                            <Body>
                                <Text>News1</Text>
                                <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                        <CardItem cardBody>
                                <Image source={News} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <Text style={{ color: 'blue' }}
                            onPress={() => Linking.openURL('http://google.com')}>
                            Link to the Article
            </Text>
                        <Text>
                            Environment is our natural surroundings that allow all living species to grow, nourish and destroy naturally on earth. Environment influences the growth and development of all the living species. Our environment gives us so much and in return we need to care for and protect our environment. Like we all design and maintain our homes for a comfortable life, we also need to design and maintain our environment to lead a comfortable and healthy life when we step out of our home. Like we all dream for a beautiful home, our nation dreams for a beautiful environment.
                            You will find below a number of short and long paragraphs on Environment. We hope these environment paragraphs will help students in completing their school assignments. These will also help children to write and read out paragraphs with simple words and small sentences. Students can select any paragraph on Environment according to their particular requirement.
            </Text>
                    </Card>
                </Content>

                    <Content>
                        <Card style={{ flex: 0 }}>
                            <Left>
                                <Thumbnail source={User} />
                                <Body>
                                    <Text>News2</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                            <CardItem cardBody>
                                <Image source={News} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <Text style={{ color: 'blue' }}
                                onPress={() => Linking.openURL('http://google.com')}>
                               Go to Link 
            </Text>
                            <Text>
                                Environment is our natural surroundings that allow all living species to grow, nourish and destroy naturally on earth. Environment influences the growth and development of all the living species. Our environment gives us so much and in return we need to care for and protect our environment. Like we all design and maintain our homes for a comfortable life, we also need to design and maintain our environment to lead a comfortable and healthy life when we step out of our home. Like we all dream for a beautiful home, our nation dreams for a beautiful environment.
                                You will find below a number of short and long paragraphs on Environment. We hope these environment paragraphs will help students in completing their school assignments. These will also help children to write and read out paragraphs with simple words and small sentences. Students can select any paragraph on Environment according to their particular requirement.
            </Text>
                        </Card>
                    </Content>
            </Container>

           
            </ScrollView>
        );
    }
}
