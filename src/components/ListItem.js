import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../Actions';

class ListItem extends Component{

    componentWillUpdate()
    {
        // ziplama efekti katar, ama emulatörde pek görünmüyor
        LayoutAnimation.spring();
    }

    renderDescription(){
        if(this.props.expanded){
            return(
                <CardSection>
                    <Text style={{flex: 1}}>{this.props.library.description}</Text>
                </CardSection>
            );
        }
    }

    render(){
        return(
            <TouchableWithoutFeedback
                onPress={()=>this.props.LibrarySelectedAction(this.props.library.id)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{this.props.library.title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state,ownProps) => {

    const expanded = state.AppState_SelectedLibraryId === ownProps.library.id;

    return { expanded: expanded };
}

export default connect(mapStateToProps, actions)(ListItem);