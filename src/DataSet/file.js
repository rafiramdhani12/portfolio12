export const pythonCode = `
from flask import Flask, render_template, request, url_for, flash, redirect
from flask_mysqldb import MySQL

app = Flask(__name__)
app.secret_key = 'many random bytes'

app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = ""
app.config["MYSQL_DB"] = "crudPY"

mysql = MySQL(app)

@app.route("/")
def index():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM students")
    data = cur.fetchall()
    cur.close()
    return render_template('index.html', students=data)

@app.route('/insert', methods=['POST'])
def insert():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        phone = request.form["phone"]
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO students (name, email, phone) VALUES (%s, %s, %s)", (name, email, phone))
        mysql.connection.commit()
        cur.close()
        flash("Data Inserted Successfully")
        return redirect(url_for('index'))

@app.route("/delete/<int:id_data>", methods=['GET'])
def delete(id_data):
    try:
        cur = mysql.connection.cursor()
        cur.execute("DELETE FROM students WHERE id=%s", (id_data,))
        mysql.connection.commit()
        cur.close()
        flash("Record has been deleted successfully")
    except Exception as e:
        flash(str(e))
    return redirect(url_for("index"))

@app.route("/update", methods=['POST'])
def update():
    if request.method == 'POST':
        id_data = request.form['id']
        name = request.form["name"]
        email = request.form["email"]
        phone = request.form["phone"]
        try:
            cur = mysql.connection.cursor()
            cur.execute("""
                        UPDATE students SET name=%s, email=%s, phone=%s
                        WHERE id=%s
                        """, (name, email, phone, id_data))
            mysql.connection.commit()
            cur.close()
            flash("Data updated successfully")
        except Exception as e:
            flash(str(e))
        return redirect(url_for("index"))
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)
`;

export const PReact = `
from app import app,db
from flask import request,jsonify
from models import Friend

# get all friend
@app.route("/api/friends",methods=['GET'])
def get_friends():
    friends = Friend.query.all()
    result = [friend.to_json() for friend in friends]
    return jsonify(result)

# create a friend
@app.route("/api/friends",methods=["POST"])
def create_friend():
  try:
    data = request.json

    # Validations
    required_fields = ["name","role","description","gender"]
    for field in required_fields:
      if field not in data or not data.get(field):
        return jsonify({"error":f'Missing required field: {field}'}), 400

    name = data.get("name")
    role = data.get("role")
    description = data.get("description")
    gender = data.get("gender")

    # Fetch avatar image based on gender
    if gender == "male":
      img_url = f"https://avatar.iran.liara.run/public/boy?username={name}"
    elif gender == "female":
      img_url = f"https://avatar.iran.liara.run/public/girl?username={name}"
    else:
      img_url = None

    new_friend = Friend(name=name, role=role, description=description, gender= gender, img_url=img_url)

    db.session.add(new_friend) 
    db.session.commit()

    return jsonify(new_friend.to_json()), 201
    
  except Exception as e:
    db.session.rollback()
    return jsonify({"error":str(e)}), 500

# delete a friend

@app.route("/api/friends/<int:id>",methods=["DELETE"])
def delete_friend(id):
    try:
      friend = Friend.query.get(id)
      if friend is None:
          return jsonify({"error":"Friend not found"}), 404
      db.session.delete(friend)
      db.session.commit()
      return jsonify({"msg":"Friend deleted"}),200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}),500
    
# update a friend profile
@app.route("/api/friends/<int:id>",methods=["PATCH"])
def update_friend(id):
    try:
      friend = Friend.query.get(id)
      if friend is None:
          return jsonify({"error":"Friend not found"}),404
      data = request.json
      
      friend.name =  data.get("name",friend.name)
      friend.role =  data.get("role",friend.role)
      friend.description =  data.get("description",friend.description)
      friend.gender =  data.get("gender",friend.gender)
      
      db.session.commit()
      return jsonify(friend.to_json()),200
    except Exception as e:
       db.session.rollback()
       return jsonify({"error":str(e)}),500


`;

export const ReactNative = `

/* eslint-disable prettier/prettier */
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import Props from './Props';

export default class ContohForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: ' ',
      password: ' ',
      Islogin: false,
    };
  }

  login = () => {
    if (!this.state.username && !this.state.password) {
      Alert.alert('Error', 'Username dan Password Harus diisi');
    } else {
      this.setState({
        Islogin: true,
      });
    }
  };

  render() {
    const {username, password, Islogin} = this.state;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Belajar Membuat Form</Text>
        <View style={styles.line} />

        {/* isi */}
        <View style={styles.content}>
          <View>
            <Text style={styles.text}>nama : </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukan nama"
              value={username}
              onChangeText={username => this.setState({username})}
            />
          </View>
          <View style={styles.wrapperInput}>
            <Text style={styles.text}>password : </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukan password"
              value={password}
              onChangeText={password => this.setState({password})}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.Button} onPress={() => this.login()}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
          {Islogin && (
            <Text style={{marginTop: 20}}>
              selamat Berhasil Login : {username}
            </Text>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {padding: 30},
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  line: {
    borderBottomWidth: 1,
    marginTop: 20,
  },
  content: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  flexRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  flexCol: {
    flexDirection: 'column',
    gap: 10,
    marginTop: 20,
  },
  Redsquare: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  Greensquare: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  Bluesquare: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  Button: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 10,

    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderBlockColor: 'gray',
    borderRadius: 5,
    height: 40,
  },
  wrapperInput: {
    marginTop: 20,
  },
});

`;
