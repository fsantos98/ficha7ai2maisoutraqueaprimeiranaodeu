import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { Link } from "react-router-dom";

class listComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Filmes: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/filmes/list";
        axios.get(url)
            .then(res => {
                if (res.data.success) {
                    const data = res.data.data;
                    this.setState({ Filmes: data });
                } else {
                    alert("Error Web Service!");
                }
            })
            .catch(error => {
                alert(error)
            });
    }
    render() {
        return (
            <table className="table table-hover table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Foto</th>
                        <th colSpan="2"> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.loadFillData()}
                </tbody>
            </table>
        );
    }
    loadFillData() {
        return this.state.Filmes.map((data, index) => {
            return (
                <tr key={index}>
                    <th>{data.id}</th>
                    <td>{data.titulo}</td>
                    <td>{data.descricao}</td>
                    <td>{data.generoId}</td>
                    
                    <td>
                        <Link className="btn btn-outline-info " to={"/edit/"+data.id}> Edit </Link>
                    </td>
                    <td>
                        <button className="btn btn-outline-danger "> Delete </button>
                    </td>
                </tr>
            )
        });
    }
}

export default listComponent;