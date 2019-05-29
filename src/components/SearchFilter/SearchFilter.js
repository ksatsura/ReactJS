//imports
import * as React from 'react';
import FilterButton from '../FilterButton/FilterButton';
import { connect } from 'react-redux';
import { fetchRequestIfNeeded } from '../../redux-utils/asyncActionUtils';
import { Link }  from 'react-router-dom';
import '../../style.css';

// @flow
type Props = {
    paramValue: string, 
    handleUrlChange: (string) => void,
    value: string,
};

export class SearchFilter extends React.Component<Props> {

    componentDidUpdate(prevProps) {
        if (this.props.paramValue !== prevProps.paramValue) {
            this.props.handleUrlChange(this.props.paramValue);
        }
    }

    componentDidMount() {
        this.props.paramValue && this.props.handleUrlChange(this.props.paramValue);
    }

    render() {
        return (
            <div className='search-buttons'>
                <div className='search-filter'>
                    <p className='search-filter-title'>search by</p>
                    <FilterButton id='title' name='title' />
                    <FilterButton id='genre' name='genre' />
                </div>
                <Link to={`/search/${this.props.value}`}>
                    <input type="submit" value="Search" className='search-button' />
                </Link>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleUrlChange: (value) => dispatch(fetchRequestIfNeeded(value)),
    };
};

const mapStateToProps = state => {
    return {
        value: state.filmListReducer.currentValue,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);