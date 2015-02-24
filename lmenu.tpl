<?
$FORMS['menu_block_level1'] = <<<END
  <a class="menu__item gradient" rel="nofollow" href="/">О компании</a>
  <a class="menu__item gradient" style="color:red" href="/predlozhenie_po_arende_tehniki">Предложение по аренде техники</a>
  <a class="menu__item gradient" style="color:red" href="/specialnoe_predlozhenie">Специальное предложение!</a>
  %lines%
  <a class="menu__item gradient" href="/poslestroitelnaya_uborka">Послестроительная уборка</a>
  <a class="menu__item gradient" href="/uslugi_alpinistov">Услуги альпинистов</a>
  <a class="menu__item gradient" style="font-weight:bold; color:red" rel="nofollow" href="/uslugi_i_ceny">Цены на услуги клининга</a>
  <a class="menu__item gradient" href="/istoriya">История развития клининга</a>
  <a class="menu__item gradient" href="/normativnaya_baza">Нормативная база</a>
  <a class="menu__item gradient" href="/kontakty">Контакты</a>
END;

$FORMS['menu_line_level1'] = <<<END
  <a class="menu__item gradient" href="%link%">%text%</a>
  %sub_menu%
END;

$FORMS['menu_block_level2'] = <<<END
  %lines%
END;

$FORMS['menu_line_level2'] = <<<END
  <a class="menu__subitem" href="%link%">%text%</a>
END;

$FORMS['menu_line_level2_a'] = <<<END
  <a class="menu__subitem--active" href="%link%">%text%</a>
END;
