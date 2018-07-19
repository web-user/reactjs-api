import React, { Component } from 'react'

const API = 'http://0.0.0.0:8000/products/API/?format=json'

class PostList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hits: []
    }
  }

  componentDidMount () {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }))
  }

  render () {
    const { hits } = this.state

    return (
      <div>
        {hits.map((productDetail, index) => {
        	return <div>
          		<h2 key={productDetail.objectID}>
              <a href={productDetail.slug}>{productDetail.name}</a>
            </h2>
            <p>{productDetail.description}</p>
        	</div>
        })}
      </div>
    )
  }
}

export default PostList
