import React from 'react'

const Lista = ["Acordar", "Escovar os dentes", "Ligar o computador", "Estudar"];

const Tarefas = () => ( <ul>{ Lista.map(Lista => <li>{ Lista }</li>) }</ul> );

export default Tarefas