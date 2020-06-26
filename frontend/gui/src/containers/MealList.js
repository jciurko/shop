import React from "react";
import axios from "axios";
import { List, Card } from "antd";

class MealList extends React.Component {
  state = {
    Meals: [{ meal_name: "", description: "", price_tag: "" }],
    list: ["a"],
  };

  componentWillMount() {
    axios.get("https://shop-281014.nw.r.appspot.com/api/").then((res) => {
      this.setState({
        Meals: res.data,
        list: ["b"],
      });
      console.log(res.data);
      console.log(this.state.Meals[0].meal_name);
    });
  }

  render() {
    return (
      <div style={{ width: "75%", margin: "auto" }}>
        <List
          style={{ margin: "auto", minInlineSize: "100%" }}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5,
            xxl: 5,
          }}
          dataSource={this.state.Meals}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.meal_name} extra={<a href="/">More</a>}>
                <p>{item.description}</p>
                <p>{item.price_tag}</p>
              </Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default MealList;
