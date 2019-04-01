/**
 *  Created by Abhishek Bhagwat.
 */

package com.company_name.project.activity;

import android.content.Intent;
import android.widget.LinearLayout;
import com.company_name.project.R;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;
import android.widget.TextView;
import android.view.View;
import android.os.Bundle;
import android.content.Context;


public class NavigationMenuActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, NavigationMenuActivity.class);
	}
	
	private LinearLayout ordersButton;
	private LinearLayout messagesButton;
	private LinearLayout profileButton;
	private TextView nameTextView;
	private TextView postTextView;
	private ConstraintLayout signoutButton;
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.navigation_menu_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure Orders component
		ordersButton = this.findViewById(R.id.orders_button);
		ordersButton.setOnClickListener((view) -> {
	this.onOrdersPressed();
});
		
		// Configure Messages component
		messagesButton = this.findViewById(R.id.messages_button);
		messagesButton.setOnClickListener((view) -> {
			this.onMessagesPressed();
		});
		
		// Configure Profile component
		profileButton = this.findViewById(R.id.profile_button);
		profileButton.setOnClickListener((view) -> {
			this.onProfilePressed();
		});

		signoutButton = this.findViewById(R.id.signout_constraint_layout);
		signoutButton.setOnClickListener((view) -> {
			this.startActivity(StartPageActivity.newIntent(this));
		});

		// Configure Name component
		nameTextView = this.findViewById(R.id.name_text_view);
		
		// Configure Post component
		postTextView = this.findViewById(R.id.post_text_view);
	}
	
	public void onOrdersPressed() {
	
		this.startOrderHistoryActivity();
	}
	
	public void onMessagesPressed() {
	
		this.startMessagesActivity();
	}
	
	public void onProfilePressed() {
	
		this.startEditUserProfileActivity();
	}
	
	private void startEditUserProfileActivity() {
	
		this.startActivity(EditUserProfileActivity.newIntent(this));
	}
	
	private void startMessagesActivity() {
	
		this.startActivity(MessagesActivity.newIntent(this));
	}
	
	private void startOrderHistoryActivity() {
	
		this.startActivity(OrderHistoryActivity.newIntent(this));
	}
}
