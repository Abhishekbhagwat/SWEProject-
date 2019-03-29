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


public class SignUpActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, SignUpActivity.class);
	}
	
	private Button signInInsteadButton;
	private Button signupbuttonButton;
	private TextView mobileNumberTextView;
	private TextView dateOfBirthTextView;
	private TextView emailAddressTextView;
	private TextView fullNameTextView;
	private TextView titleTextView;
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.sign_up_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure Sign In Instead component
		signInInsteadButton = this.findViewById(R.id.sign_in_instead_button);
		signInInsteadButton.setOnClickListener((view) -> {
	this.onSignInInsteadPressed();
});
		
		// Configure signUpButton component
		signupbuttonButton = this.findViewById(R.id.signupbutton_button);
		signupbuttonButton.setOnClickListener((view) -> {
	this.onSignUpButtonPressed();
});
		
		// Configure Mobile Number component
		mobileNumberTextView = this.findViewById(R.id.mobile_number_text_view);
		
		// Configure Date of Birth component
		dateOfBirthTextView = this.findViewById(R.id.date_of_birth_text_view);
		
		// Configure Email Address component
		emailAddressTextView = this.findViewById(R.id.email_address_text_view);
		
		// Configure Full Name component
		fullNameTextView = this.findViewById(R.id.full_name_text_view);
		
		// Configure title component
		titleTextView = this.findViewById(R.id.title_text_view);
	}
	
	public void onSignInInsteadPressed() {
	
		this.startSignInActivity();
	}
	
	public void onSignUpButtonPressed() {
	
		this.startGalleryCategoryActivity();
	}
	
	private void startSignInActivity() {
	
		this.startActivity(SignInActivity.newIntent(this));
	}
	
	private void startGalleryCategoryActivity() {
	
		this.startActivity(GalleryCategoryActivity.newIntent(this));
	}
}
