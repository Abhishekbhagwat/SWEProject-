/**
 *  Created by Abhishek Bhagwat.
 */

package com.company_name.project.activity;

import android.content.Intent;
import android.widget.Button;
import com.company_name.project.R;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;
import android.widget.TextView;
import android.view.View;
import android.os.Bundle;
import android.content.Context;


public class SignInActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, SignInActivity.class);
	}
	
	private TextView forgotPasswordTextView;
	private TextView dontHaveAccountTextView;
	private Button signinbuttonButton;
	private TextView passwordTextView;
	private TextView usernameTextView;
	private TextView titleTextView;
	private ImageView google_sign_in_image_view;
	private ImageView facebook_sign_in_image_view;
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.sign_in_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure Forgot Password? component
		forgotPasswordTextView = this.findViewById(R.id.forgot_password_text_view);
		dontHaveAccountTextView = this.findViewById(R.id.dont_have_account_text_view);
		dontHaveAccountTextView.setOnClickListener((view -> {
			this.startSignUpActivity();
		}));
		// Configure signInButton component
		signinbuttonButton = this.findViewById(R.id.signinbutton_button);
		signinbuttonButton.setOnClickListener((view) -> {
			this.onSignInButtonPressed();
		});
		google_sign_in_image_view = this.findViewById(R.id.google_sign_in_image_view);
		google_sign_in_image_view.setOnClickListener((view) -> {
			this.startActivity(GalleryCategoryActivity.newIntent(this));
		});
		facebook_sign_in_image_view = this.findViewById(R.id.facebook_sign_in__image_view);
		facebook_sign_in_image_view.setOnClickListener((view) -> {
			this.startActivity(GalleryCategoryActivity.newIntent(this));
		});

		// Configure Password component
		passwordTextView = this.findViewById(R.id.password_text_view);
		
		// Configure Username component
		usernameTextView = this.findViewById(R.id.username_text_view);
		
		// Configure title component
		titleTextView = this.findViewById(R.id.title_text_view);
	}
	
	public void onSignInButtonPressed() {
	
		this.startGalleryCategoryActivity();
	}
	
	private void startGalleryCategoryActivity() {
	
		this.startActivity(GalleryCategoryActivity.newIntent(this));
	}

	private void startSignUpActivity() {

		this.startActivity(SignUpActivity.newIntent(this));
	}
}
