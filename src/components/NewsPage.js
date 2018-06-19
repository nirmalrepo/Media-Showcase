import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { searchTopNewsAction, searchAnyNewsAction } from '../actions/newsActions';
import ArticlesPage from '../components/ArticlesPage';

// NewsPage Component
class NewsPage extends Component {

    // We want to get news from the API right after our component renders.
    componentDidMount() {
        
        this.props.dispatch(searchTopNewsAction());
    }

    render() {
        const { articles } = this.props;
        return (
          <div className="container-fluid">
            {articles ? <div>
              <input
                type="text"
                ref={ref => (this.query = ref)}
              />
              <input
                type="submit"
           className="btn btn-primary"
                value="Search Library"
                onClick={this.handleSearch}
              />
              <div className="row">
                <ArticlesPage articles={articles} />
                
              </div>
            </div> : 'loading ....'}
          </div>
        );
      }
    
}

NewsPage.propTypes = {
    
    articles: PropTypes.array
    };
const mapStateToProps = ({ news }) => ({
    articles: news.articles,
  });
  
  // connect method from react-router connects the component with redux store
  export default connect(
    mapStateToProps)(NewsPage);