<?php
	    $link = mysql_connect("localhost", "root", "")
		    or die("não foi possivel conectar !!!" . mysql_error());
	    $banco = mysql_select_db("teste_xml", $link)
		    or die("Erro ao abrir o banco de dados !!!" . mysql_error());
?>