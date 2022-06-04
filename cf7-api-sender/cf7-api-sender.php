<?php


/**
* Plugin Name:Plugin Name
* Plugin URI:Plugin Author Link
* Author:Plugin Author Name
* author URI:Plugin Author Link
* Description :This plugin does wonders
* Version:0.1.0
* License URL:http://www.gnu.org/Licenses/gpl-2.0.txt
* text-domain: prefix-plugin-name
*/

add_action('wpc7_mail_sent','techiepress_cf7_api_sender');

function techiepress_cf7_api_sender($contact_form)
{
$title=$contact_form->title;
if($title=='Contact form 1')
{
  $submission=WPCF7_Submission::get_instance();
if($submission)
{
$posted_data=$submission->get_posted_data();
  $name=$posted_data['your-name'];
  $email=$posted_data['your-email'];
  $subject=$posted_data['your-subject'];
  $message=$posted_data['your-message'];

  $url='r5jqb9zy3ya0ubhsshdds3pqxdn5e5vq@hook.eu1.make.com';   

  $arg=array(
      'body'=>array(
          'name'=>$name,
          'email'=>$email,
          'subject'=>$subject,
          'message'=>$message,
        )
      );

      wp_remote_post($url,$args);
      return;
  }
}
}
 