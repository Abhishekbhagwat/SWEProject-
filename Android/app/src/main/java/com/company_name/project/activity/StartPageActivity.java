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


public class StartPageActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, StartPageActivity.class);
	}
	
	private Button signupButton;
	private Button signinButton;
	private TextView taglineTextView;
	private TextView titleTextView;
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.start_page_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure signUp component
		signupButton = this.findViewById(R.id.signup_button);
		signupButton.setOnClickListener((view) -> {
	this.onSignUpPressed();
});
		
		// Configure signIn component
		signinButton = this.findViewById(R.id.signin_button);
		signinButton.setOnClickListener((view) -> {
	this.onSignInPressed();
});
		
		// Configure Tagline component
		taglineTextView = this.findViewById(R.id.tagline_text_view);
		
		// Configure title component
		titleTextView = this.findViewById(R.id.title_text_view);
	}
	
	public void onSignUpPressed() {
	
		this.startSignUpActivity();
	}
	
	public void onSignInPressed() {
	
		this.startSignInActivity();
	}
	
	private void startSignUpActivity() {
	
		this.startActivity(SignUpActivity.newIntent(this));
	}
	
	private void startSignInActivity() {
	
		this.startActivity(SignInActivity.newIntent(this));
	}
}
