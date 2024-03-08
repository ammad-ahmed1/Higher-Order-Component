// -------------Class Component---------------
import React from "react";

const HOC = (WrappedComponent, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      term: "",
    };
    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();
        this.setState({ ...this.state, data: json });
      };
      fetchData();
    }
    render() {
      let { term, data } = this.state;
      let filterData = data?.filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.indexOf(term) >= 0;
        }
        if (entity === "todos") {
          const { title } = d;
          return title?.indexOf(term) >= 0;
        }
      });
      return (
        <div>
          <h2>{entity}</h2>
          <input
            type="text"
            value={term}
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
          />
          <WrappedComponent data={filterData}></WrappedComponent>
        </div>
      );
    }
  };
};

export default HOC;
// -------------Functional Component---------------
{
  /*
import React, { useState, useEffect } from "react";

const HOC = (WrappedComponent, entity) => {
  return function HOCComponent() {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
        const json = await res.json();
        setData(json);
      };
      fetchData();
    }, [entity]);

    const filteredData = data.filter((d) => {
      if (entity === "users") {
        const { name } = d;
        return name.toLowerCase().includes(term.toLowerCase());
      }
      if (entity === "todos") {
        const { title } = d;
        return title?.toLowerCase().includes(term.toLowerCase());
      }
      return false;
    });

    return (
      <div>
        <h2>{entity}</h2>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <WrappedComponent data={filteredData} />
      </div>
    );
  };
};

export default HOC;

 */
}
