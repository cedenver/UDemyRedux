import React, {Component} from 'react';
import {connect} from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component{
    
    renderItem(lib)
    {
        return <ListItem library={lib}/>;
    }
    
    render(){
        return (
            <FlatList data={this.props.libraries}
                renderItem={({item})=>this.renderItem(item)}
                keyExtractor = {(lib)=>lib.id}
            />
        );
    }
};

const mapStateToProps = state => {
    return {libraries: state.libraries};
}

export default connect(mapStateToProps)(LibraryList);