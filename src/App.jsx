import './App.css'
import React from 'react';

import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default _ => 
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className='Cards'>
            <Card titulo="#05 Componente com Filho" color="	#0034f0">
                <Familia sobrenome='Almeida'>
                    <FamiliaMembro nome='Gabriel'/>
                    <FamiliaMembro nome='Josué'  />
                    <FamiliaMembro nome='Pedro' />                       
                </Familia>
            </Card>

            <Card titulo="#04 Card Aleatorio" color="#0a2205">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 ComParametro" color="#56bf52">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota="5.5"/>
            </Card>

            <Card titulo="#02 Fragmento" color="#1f4220"> 
                <Fragmento/>
            </Card>

            <Card titulo="#01 Primeiro" color="	#437a37">
                <Primeiro />
            </Card>

           
        </div>
    
    </div>