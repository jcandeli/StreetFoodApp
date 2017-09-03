import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/app';
import { actions } from '../redux/search';

class SearchView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Search View {this.props.searchReducer.distance}</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ searchReducer }) => ({ searchReducer });

export default connect(mapStateToProps, actions)(SearchView);
