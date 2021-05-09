/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint "react/react-in-jsx-scope": "off" */
/* globals React ReactDOM PropTypes */
/* eslint "react/jsx-no-undef": "off" */
/* eslint "react/no-multi-comp": "off" */
/* eslint "no-alert": "off" */


// eslint-disable-next-line react/prefer-stateless-function


function ItemRow({ item }) {
  return (
    <tr>
      {/* <td>{item.id}</td> */}
      <td>{item.name}</td>
      <td>{`$${item.price}`}</td>

      <td>{item.category}</td>
      <td>
        <a href={item.image} target="_blank" rel="noreferrer">View</a>
      </td>
    </tr>
  );
}

function ItemTable({ items }) {
  const itemRows = items.map(item => (
    <ItemRow key={item.id} item={item} />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {itemRows}
      </tbody>
    </table>
  );
}

// class to add items
class ItemAdd extends React.Component {
  // simple constructor, sets price state to blank
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { price: '' };
  }

  // on submit
  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.itemAdd;
    const item = {
      name: form.name.value,
      category: form.category.value,
      price: this.state.price,
      image: form.image.value,
    };
    // reset values
    const { createItem } = this.props;
    createItem(item);
    form.name.value = '';
    this.setState({ price: '' });
    form.category.value = '';
    form.image.value = '';
  }

  render() {
    return (
      <form name="itemAdd" onSubmit={this.handleSubmit}>
        <label htmlFor="category">
          Category
          <select name="category">
            <option value="Shirts">Shirts</option>
            <option value="Jeans">Jeans</option>
            <option value="Jackets">Jackets</option>
            <option value="Sweaters">Sweaters</option>
            <option value="Accessories">Accessories</option>
          </select>
        </label>

        <label htmlFor="price">
          Price Per Unit
          <input
            type="text"
            name="price"
            value={`$${this.state.price}`}
            onChange={(e) => {
              const newValue = e.target.value.split('$')[1] || '';
              this.setState({ price: newValue });
            }}
          />
        </label>

        <label htmlFor="name">
          Product Name
          <input type="text" name="name" />
        </label>

        <label htmlFor="image">
          Image URL
          <input type="text" name="image" />
        </label>

        <button>Add Product</button>
      </form>
    );
  }
}

ItemAdd.propTypes = {
  createItem: PropTypes.func.isRequired,
};

async function graphQLFetch(query, variables = {}) {
  try {
    const response = await fetch(window.ENV.UI_API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });
    const body = await response.text();
    const result = JSON.parse(body);

    if (result.errors) {
      const error = result.errors[0];
      if (error.extensions.code === 'BAD_USER_INPUT') {
        const details = error.extensions.exception.errors.join('\n ');
        alert(`${error.message}:\n ${details}`);
      } else {
        alert(`${error.extensions.code}: ${error.message}`);
      }
    }
    return result.data;
  } catch (e) {
    alert(`Error in sending data to server: ${e.message}`);
    return null;
  }
}

// list class
class ItemList extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };
    this.createItem = this.createItem.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
      productList {
        id category name price image
      }
    }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ items: data.productList });
    }
  }

  // create item and add to graphql
  async createItem(item) {
    const query = `mutation {
        productAdd(product:{
            name: "${item.name}",
            category: ${item.category},
            price: ${item.price},
            image: "${item.image}", 
        }) {
                id
            }
        }`;

    const data = await graphQLFetch(query, { item });
    if (data) {
      this.loadData();
    }
  }

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <h1>My Company Inventory</h1>
        <hr />
        <ItemTable items={items} />
        <hr />
        <ItemAdd createItem={this.createItem} />
      </React.Fragment>
    );
  }
}

const element = <ItemList />;

ReactDOM.render(element, document.getElementById('contents'));
