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


public class ProductDetailsActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, ProductDetailsActivity.class);
	}
	
	private Button addToCartButtonButton;
	private Button buyNowButton;
	private TextView textViewTextView;
	private TextView textViewTwoTextView;
	private TextView textViewThreeTextView;
	private TextView titleTextView;
	private TextView titleTwoTextView;
	private TextView lTextView;
	private TextView textTextView;
	private TextView priceTextView;
	private TextView titleThreeTextView;
	private TextView brandTextView;
	private TextView countTextView;
	private TextView titleFourTextView;
	private TextView lTwoTextView;
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.product_details_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure Button component
		addToCartButtonButton = this.findViewById(R.id.add_to_cart_button_button);
		addToCartButtonButton.setOnClickListener((view) -> {
	this.onaddToCartButtonPressed();
});
		
		// Configure Button component
		buyNowButton = this.findViewById(R.id.buy_now_button);
		buyNowButton.setOnClickListener((view) -> {
	this.onbuyNowPressed();
});
		
		// Configure 1 component
		textViewTextView = this.findViewById(R.id.text_view_text_view);
		
		// Configure + component
		textViewTwoTextView = this.findViewById(R.id.text_view_two_text_view);
		
		// Configure _ component
		textViewThreeTextView = this.findViewById(R.id.text_view_three_text_view);
		
		// Configure Title component
		titleTextView = this.findViewById(R.id.title_text_view);
		
		// Configure Title component
		titleTwoTextView = this.findViewById(R.id.title_two_text_view);
		
		// Configure L component
		lTextView = this.findViewById(R.id.l_text_view);
		
		// Configure text component
		textTextView = this.findViewById(R.id.text_text_view);
		
		// Configure Price component
		priceTextView = this.findViewById(R.id.price_text_view);
		
		// Configure Title component
		titleThreeTextView = this.findViewById(R.id.title_three_text_view);
		
		// Configure Brand component
		brandTextView = this.findViewById(R.id.brand_text_view);
		
		// Configure Count component
		countTextView = this.findViewById(R.id.count_text_view);
		
		// Configure Title component
		titleFourTextView = this.findViewById(R.id.title_four_text_view);
		
		// Configure L component
		lTwoTextView = this.findViewById(R.id.l_two_text_view);
	}
	
	public void onaddToCartButtonPressed() {
	
		this.startCartActivity();
	}
	
	public void onbuyNowPressed() {
	
		this.startCheckoutActivity();
	}
	
	private void startCheckoutActivity() {
	
		this.startActivity(CheckoutActivity.newIntent(this));
	}
	
	private void startCartActivity() {
	
		this.startActivity(CartActivity.newIntent(this));
	}
}
