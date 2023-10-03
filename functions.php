<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    // wp_enqueue_script( 'animation', get_stylesheet_directory_uri() . '/animation.js'); //, array( 'jquery' ), 1.1, true
    wp_enqueue_script("jquery");
    wp_enqueue_script('swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js',);
    wp_enqueue_script('skrollr', get_stylesheet_directory_uri() . '/skrollr.js');
    wp_enqueue_style('swipercss', 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css');
    // wp_enqueue_script('swipercss');
    wp_enqueue_script('animation', get_stylesheet_directory_uri() . '/animation.js'); // Set the last argument to true for 'defer'

}

function add_defer_attribute($tag, $handle) {
    if ('animation' === $handle) {
        $tag = str_replace(' src', ' defer="defer" src', $tag);
    }
    return $tag;
}
add_filter('script_loader_tag', 'add_defer_attribute', 10, 2);

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}