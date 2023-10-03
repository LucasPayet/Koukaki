<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script> -->
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<!-- <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a> -->

	<header id="masthead" class="site-header">
        
        <h1><span><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></span></h1>
        
        <button class="burger">
            <span class="line l1"></span>
            <span class="line l2"></span>
            <span class="line l3"></span>
        </button>

        <nav class="menu-nav nav-position">
            <ul>
                <li><img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants" class="img_header"></li>
                <li><a href="#story" class="title-anim nav-anim"><span>Histoire</span></a></li>
                <li><a href="#characters" class="title-anim nav-anim"><span>Personnages</span></a></li>
                <li><a href="#place" class="title-anim nav-anim"><span>Lieu</span></a></li>
                <li><a href="#studio" class="title-anim nav-anim"><span>Studio</span><span>Koukaki</span></a></li>
                <li>STUDIO KOUKAKI</li>
            </ul>
        </nav>


	</header> <!-- #masthead -->
