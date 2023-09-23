<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner fade-in-anim fade-in-down">
            <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants" class="img_header" data-0="position: absolute; top: 300px;" data-1100="top: 500px;"> 
        </section>
        
        <section id="#story" class="story">
            <h2>L'histoire</h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            $characters_query = new WP_Query($args);
            ?>
            <article id="charaters_custom" class="fade-in-up">
                <div id="characters" class="main-character">
                    <h3>Les personnages</h3>
                    <?php get_template_part( 'character-swiper' );?>
                </div> 
            </article>
            
            <article id="place" class="fade-in-up">
                <div class="no-animation">
                    <h3>Le Lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>
                <img src="http://localhost/Koukaki/wp-content/themes/foce-child/assets/image/Nuages.png" alt="" class="parallax" data-1550="position:absolute; top:40px; left:793px;" data-2200="left:333px;">
            </article>
        </section>

        <section id="studio" class="fade-in-up">
            <h2 class="title-anim"><span>Studio</span><span>Koukaki</span></h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>

    <style>
    .swiper {
      width: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
    }

    .swiper-wrapper{
        width: 1440px;
        height: 442px;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 442px;
      height: 442px;
      display: flex;
      align-items: center;
    }

    .swiper-slide figure img {
      display: block;
      width: 382px;
    }
  </style>
  <script>
    
  </script>

        <script>
            var s = skrollr.init();
        </script>

    </main><!-- #main -->

<?php
get_footer();
