import React,{ Component } from 'react';
import NewSingle from './NewSingle';

class News extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state={
            news: [],
        };
    }
     
    componentDidMount()
    {
        const url='https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-02&sortBy=publishedAt&apiKey=97766530af724966818b39d8e037f4a8';

        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                news: data.articles
            })
        })
        .catch((error)=> console.log(error));
    }
   renderItems()
   {
       return this.state.news.map((item)=>(
        <NewSingle key={item.url} item={item} />
       ));
   }

    render()
    {
        return(
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
}

export default News;