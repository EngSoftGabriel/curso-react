import './App.css'
import React from 'react';

import Mega from './components/mega/Mega';
import Contador from './components/contator/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import IndiretaFilho from './components/comunicacao/IndiretaFilho';
import DiretaPai from './components/comunicacao/DiretaPai';
import DiretaFilho from './components/comunicacao/DiretaFilho';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import ListaAluno from './components/repeticao/ListaAluno';

export default _ => 
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className='Cards'>
            <Card titulo="#13 - Mega" color="#B9006E">
                <Mega qtde={8}></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>
    
            <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                <Input></Input>
            </Card>

            <Card titulo='#10 - Comunicação Indireta' color='#cae6ff'>
                <IndiretaPai />      
            </Card>

            <Card titulo='#09 - Comunicação Direta' color='#af6a31'>
                <DiretaPai />     
                <DiretaFilho />      
            </Card>

            <Card titulo='#08 - Condicional' color='#cdcd65'>
                <ParOuImpar numero={30}/>     
                <UsuarioInfo usuario={{ nome: 'Gabriel' }} />           
                <UsuarioInfo usuario={{}} />           
            </Card>

            <Card titulo='#07 - Desafio Repetição' color='#51074a'>
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo='#06 - Repetição' color='#8f83d8'>
                <ListaAluno></ListaAluno>
            </Card>

            <Card titulo="#05 - Componente com Filho" color="	#0034f0">
                <Familia sobrenome='Almeida'>
                    <FamiliaMembro nome='Gabriel'/>
                    <FamiliaMembro nome='Josué'  />
                    <FamiliaMembro nome='Pedro' />                       
                </Familia>
            </Card>

            <Card titulo="#04 - Card Aleatorio" color="#0a2205">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - ComParametro" color="#56bf52">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota="5.5"/>
            </Card>

            <Card titulo="#02 - Fragmento" color="#1f4220"> 
                <Fragmento/>
            </Card>

            <Card titulo="#01 - Primeiro" color="	#437a37">
                <Primeiro />
            </Card>

           
        </div>
    
    </div>