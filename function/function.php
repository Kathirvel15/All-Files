<?php
/**
* plugin Name: Hans Web Project
* Description: Handle the custom functions for the Hans Site
*/

// Remove the admin bar from the front end 
add_filter('show_admin_bar', '__return_false' );