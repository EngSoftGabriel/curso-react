import React from 'react';

import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio min={1} max={60}/>
        <Fragmento />
        <Primeiro />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro"
            nota="5.5"
        />
    </div>