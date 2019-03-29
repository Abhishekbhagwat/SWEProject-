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


public class CartActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, CartActivity.class);
	}
	
	private TextView titleTextView;
	private Button placeorderButton;
	private TextView titleTwoTextView;
	private TextView titleThreeTextView;
	private ImageView header_menu_dark_button;
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.cart_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure Title component
		titleTextView = this.findViewById(R.id.title_text_view);
		
		// Configure placeOrder component
		placeorderButton = this.findViewById(R.id.placeorder_button);
		placeorderButton.setOnClickListener((view) -> {
			this.onPlaceOrderPressed();
		});
		header_menu_dark_button = this.findViewById(R.id.header_menu_dark_image_view);
		header_menu_dark_button.setOnClickListener((view) -> {
			this.startActivity(NavigationMenuActivity.newIntent(this));
		});
		// Configure Title component
		titleTwoTextView = this.findViewById(R.id.title_two_text_view);
		
		// Configure Title component
		titleThreeTextView = this.findViewById(R.id.title_three_text_view);
	}
	
	public void onPlaceOrderPressed() {
	
		this.startCheckoutActivity();
	}
	
	private void startCheckoutActivity() {
	
		this.startActivity(CheckoutActivity.newIntent(this));
	}
}
