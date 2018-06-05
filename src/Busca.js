import React, { Component } from 'react';
import './css/busca.css';
import $ from "jquery";

export default class Busca extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredientesReconhecidos: [],
      listaIngredientes: []
    };
    
    this.uploadAction = this.uploadAction.bind(this);
    this.adicionaIngrediente = this.adicionaIngrediente.bind(this);
    this.adicionaIngredienteManual = this.adicionaIngredienteManual.bind(this);
  }

  uploadAction() {
    $('#busca #reconhecedor #ingredientes-reconhecidos').hide();

    var dados = new FormData();
    var imagedata = document.querySelector('input[type="file"]').files[0];
    dados.append("uploaded_file", imagedata);

    fetch("https://projeto-vision.herokuapp.com/visionLabel.php", {
        method: "POST",
        body: dados
    })
    .then((results) => results.json())
    .then(data => {
        let dat;
        let produtos = []
        for(dat in data){
            let produto = data[dat].produto;
            produtos.push(produto);
        }
        this.setState({ingredientesReconhecidos: produtos});
        $('#busca #reconhecedor #ingredientes-reconhecidos').show();
    });
  }

  uploadArquivo(){
    $('#upload').trigger('click');
  }

  enviaForm(e){
    e.preventDefault();
    console.log($('input'));
  }
  adicionaIngrediente(){
    if(this.state.listaIngredientes.length === 0)
      $('#busca #ingredientes').show();

    let novaLista = this.state.listaIngredientes;
    novaLista.push($('#ingredientes-reconhecidos input:checked').val());
    this.setState({listaIngredientes: novaLista});
    $('#busca #reconhecedor #ingredientes-reconhecidos').hide();
  }
  
  adicionaIngredienteManual(){
    if(this.state.listaIngredientes.length === 0)
      $('#busca #ingredientes').show();

    let novaLista = this.state.listaIngredientes;
    $('#ingredientes-base input:checked').each(function(){
      novaLista.push($(this).val());
    });

    this.setState({listaIngredientes: novaLista});
  }

  alteraMenu(e){
    let ativo = $('#menu .ativo');
    let naoAtivo = $('#menu li:not(.ativo)');

    ativo.removeClass('ativo');
    naoAtivo.addClass('ativo');

    if($('#menu li:nth-child(1)').hasClass('ativo')){
      $('#reconhecedor').show();
      $('#manualmente').hide();
    } else{
      $('#reconhecedor').hide();
      $('#manualmente').show();
    }
  }
  componentDidMount(){
    $('#ingredientes').click(function(e){
      if($(e.target).hasClass('fechar')){

        $(e.target).parent().remove();
        //let retirarIngrediente = $(e.target).parent().find('.valor').text();
        /*let novaLista = listaIngredientes.map(function(ingrediente){
            if(ingrediente != retirarIngrediente)
              return ingrediente;
        });

        console.log*/
      }
    });

    $('#procurar-receita').click(function(){
      window.location = '/receita/ala-minuta';
    });
  }

  render() {
    return (    
      <div id="busca">
        
        <figure className="banner"></figure>
        <div className="conteudo">

          <div className="wrapper">
            <p className="titulo">Quais ingredientes você irá utilizar na receita?</p>
          
            <ul id="menu">
              <li className="ativo" onClick={this.alteraMenu}>Reconhecer por imagem</li>{/*
           */}<li onClick={this.alteraMenu}>Adicionar manualmente</li>
            </ul>
            
            <div id="reconhecedor">
                <div id="upload-wrapper" className="conteudo-interno">
                  <input id="upload" name="myFile" type="file" accept=".jpg, .jpeg, .png" onChange={this.uploadAction} />
                  <button className="btn" onClick={this.uploadArquivo}>Reconhecer ingrediente</button>
                </div>
                <div id="ingredientes-reconhecidos" className="conteudo-interno">
                  <p className="txt">Qual a melhor descrição do seu ingrediente?</p>
                  {
                    this.state.ingredientesReconhecidos.map(function(ingrediente){
                      return (
                        <div key={ingrediente}><input type="radio" name="ingrediente" id={ingrediente} value={ingrediente}/> <label htmlFor={ingrediente}>{ingrediente}</label></div>
                      );
                    })
                  }
                  <button id="adicionar-reconhecido" onClick={this.adicionaIngrediente} className="btn">Adicionar ingrediente</button>
                </div>
            </div>

            <div id="manualmente">
                <div id="ingredientes-base" className="conteudo-interno">
                  <p className="txt">Qual(is) ingrediente(s) você deseja adicionar?</p>
                  <div><input type="checkbox" name="manual1" id="manual1" value="Batata"/> <label htmlFor="manual1">Batata</label></div>
                  <div><input type="checkbox" name="manual2" id="manual2" value="Tomate"/> <label htmlFor="manual2">Tomate</label></div>
                  <div><input type="checkbox" name="manual3" id="manual3" value="Alface"/> <label htmlFor="manual3">Alface</label></div>
                  <div><input type="checkbox" name="manual4" id="manual4" value="Pão"/> <label htmlFor="manual4">Pão</label></div>
                  
                  <div><input type="checkbox" name="manual5" id="manual5" value="Ingrediente 5"/> <label htmlFor="manual5">Ingrediente 5</label></div>
                  <div><input type="checkbox" name="manual6" id="manual6" value="Ingrediente 6"/> <label htmlFor="manual6">Ingrediente 6</label></div>
                  <div><input type="checkbox" name="manual7" id="manual7" value="Ingrediente 7"/> <label htmlFor="manual7">Ingrediente 7</label></div>
                  <div><input type="checkbox" name="manual8" id="manual8" value="Ingrediente 8"/> <label htmlFor="manual8">Ingrediente 8</label></div>
                  <div><input type="checkbox" name="manual9" id="manual9" value="Ingrediente 9"/> <label htmlFor="manual9">Ingrediente 9</label></div>
                  <div><input type="checkbox" name="manual10" id="manual10" value="Ingrediente 10"/> <label htmlFor="manual10">Ingrediente 10</label></div>
                  <div><input type="checkbox" name="manual11" id="manual11" value="Ingrediente 11"/> <label htmlFor="manual11">Ingrediente 11</label></div>
                  <div><input type="checkbox" name="manual12" id="manual12" value="Ingrediente 12"/> <label htmlFor="manual12">Ingrediente 12</label></div>
                  <div><input type="checkbox" name="manual13" id="manual13" value="Ingrediente 13"/> <label htmlFor="manual13">Ingrediente 13</label></div>
                  <div><input type="checkbox" name="manual14" id="manual14" value="Ingrediente 14"/> <label htmlFor="manual14">Ingrediente 14</label></div>
                  <div><input type="checkbox" name="manual15" id="manual15" value="Ingrediente 15"/> <label htmlFor="manual15">Ingrediente 15</label></div>
                  <div><input type="checkbox" name="manual16" id="manual16" value="Ingrediente 16"/> <label htmlFor="manual16">Ingrediente 16</label></div>
                  <div><input type="checkbox" name="manual17" id="manual17" value="Ingrediente 17"/> <label htmlFor="manual17">Ingrediente 17</label></div>
                  <div><input type="checkbox" name="manual18" id="manual18" value="Ingrediente 18"/> <label htmlFor="manual18">Ingrediente 18</label></div>
                  <div><input type="checkbox" name="manual19" id="manual19" value="Ingrediente 19"/> <label htmlFor="manual19">Ingrediente 19</label></div>
                  <div><input type="checkbox" name="manual20" id="manual20" value="Ingrediente 20"/> <label htmlFor="manual20">Ingrediente 20</label></div>
                  <div><input type="checkbox" name="manual21" id="manual21" value="Ingrediente 21"/> <label htmlFor="manual21">Ingrediente 21</label></div>
                  <div><input type="checkbox" name="manual22" id="manual22" value="Ingrediente 22"/> <label htmlFor="manual22">Ingrediente 22</label></div>
                  <div><input type="checkbox" name="manual23" id="manual23" value="Ingrediente 23"/> <label htmlFor="manual23">Ingrediente 23</label></div>
                  <div><input type="checkbox" name="manual24" id="manual24" value="Ingrediente 24"/> <label htmlFor="manual24">Ingrediente 24</label></div>
                  <div><input type="checkbox" name="manual25" id="manual25" value="Ingrediente 25"/> <label htmlFor="manual25">Ingrediente 25</label></div>
                  <div><input type="checkbox" name="manual26" id="manual26" value="Ingrediente 26"/> <label htmlFor="manual26">Ingrediente 26</label></div>
                  <div><input type="checkbox" name="manual27" id="manual27" value="Ingrediente 27"/> <label htmlFor="manual27">Ingrediente 27</label></div>
                  <div><input type="checkbox" name="manual28" id="manual28" value="Ingrediente 28"/> <label htmlFor="manual28">Ingrediente 28</label></div>
                  <div><input type="checkbox" name="manual29" id="manual29" value="Ingrediente 29"/> <label htmlFor="manual29">Ingrediente 29</label></div>
                  <div><input type="checkbox" name="manual30" id="manual30" value="Ingrediente 30"/> <label htmlFor="manual30">Ingrediente 30</label></div>
                  <div><input type="checkbox" name="manual31" id="manual31" value="Ingrediente 31"/> <label htmlFor="manual31">Ingrediente 31</label></div>
                  <div><input type="checkbox" name="manual32" id="manual32" value="Ingrediente 32"/> <label htmlFor="manual32">Ingrediente 32</label></div>
                  <div><input type="checkbox" name="manual33" id="manual33" value="Ingrediente 33"/> <label htmlFor="manual33">Ingrediente 33</label></div>
                  <div><input type="checkbox" name="manual34" id="manual34" value="Ingrediente 34"/> <label htmlFor="manual34">Ingrediente 34</label></div>
                  <div><input type="checkbox" name="manual35" id="manual35" value="Ingrediente 35"/> <label htmlFor="manual35">Ingrediente 35</label></div>
                  <div><input type="checkbox" name="manual36" id="manual36" value="Ingrediente 36"/> <label htmlFor="manual36">Ingrediente 36</label></div>
                  <div><input type="checkbox" name="manual37" id="manual37" value="Ingrediente 37"/> <label htmlFor="manual37">Ingrediente 37</label></div>
                  <div><input type="checkbox" name="manual38" id="manual38" value="Ingrediente 38"/> <label htmlFor="manual38">Ingrediente 38</label></div>
                  <div><input type="checkbox" name="manual39" id="manual39" value="Ingrediente 39"/> <label htmlFor="manual39">Ingrediente 39</label></div>
                  <div><input type="checkbox" name="manual40" id="manual40" value="Ingrediente 40"/> <label htmlFor="manual40">Ingrediente 40</label></div>
                  <div><input type="checkbox" name="manual41" id="manual41" value="Ingrediente 41"/> <label htmlFor="manual41">Ingrediente 41</label></div>
                  <div><input type="checkbox" name="manual42" id="manual42" value="Ingrediente 42"/> <label htmlFor="manual42">Ingrediente 42</label></div>
                  <div><input type="checkbox" name="manual43" id="manual43" value="Ingrediente 43"/> <label htmlFor="manual43">Ingrediente 43</label></div>
                  <div><input type="checkbox" name="manual44" id="manual44" value="Ingrediente 44"/> <label htmlFor="manual44">Ingrediente 44</label></div>
                  <div><input type="checkbox" name="manual45" id="manual45" value="Ingrediente 45"/> <label htmlFor="manual45">Ingrediente 45</label></div>
                  <div><input type="checkbox" name="manual46" id="manual46" value="Ingrediente 46"/> <label htmlFor="manual46">Ingrediente 46</label></div>
                  <div><input type="checkbox" name="manual47" id="manual47" value="Ingrediente 47"/> <label htmlFor="manual47">Ingrediente 47</label></div>
                  <div><input type="checkbox" name="manual48" id="manual48" value="Ingrediente 48"/> <label htmlFor="manual48">Ingrediente 48</label></div>
                  <div><input type="checkbox" name="manual49" id="manual49" value="Ingrediente 49"/> <label htmlFor="manual49">Ingrediente 49</label></div>
                  <div><input type="checkbox" name="manual50" id="manual50" value="Ingrediente 50"/> <label htmlFor="manual50">Ingrediente 50</label></div>
                  
                  <button id="adicionar-manual" onClick={this.adicionaIngredienteManual} className="btn">Adicionar ingrediente</button>
                </div>
            </div>
          </div>

          <div id="ingredientes" className="wrapper">
            <p className="titulo">Lista de ingredientes adicionados</p>
            <div id="lista-ingredientes">
              {
                this.state.listaIngredientes.map(function(ingrediente){
                  return (
                    <div key={ingrediente} className="ingrediente"><span className="valor">{ingrediente}</span><span className="fechar">x</span></div>
                  );
                })
              }
            </div>

            <button id="procurar-receita" className="btn">Procurar receita</button>
          </div>
        </div>
      </div>
    );
  }
}