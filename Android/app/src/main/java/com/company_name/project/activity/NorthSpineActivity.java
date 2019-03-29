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


public class NorthSpineActivity extends AppCompatActivity {
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, NorthSpineActivity.class);
	}
	
	private LinearLayout chickenriceButton;
	private ImageView header_menu_dark_button;
	private ImageView cart_image_view;
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.north_spine_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure chickenRice component
		chickenriceButton = this.findViewById(R.id.chickenrice_button);
		chickenriceButton.setOnClickListener((view) -> {
			this.onChickenRicePressed();
		});
		header_menu_dark_button = this.findViewById(R.id.header_menu_dark_image_view);
		header_menu_dark_button.setOnClickListener((view) -> {
			this.startActivity(NavigationMenuActivity.newIntent(this));
		});
		cart_image_view = this.findViewById(R.id.cart_image_view2);
		cart_image_view.setOnClickListener((view) -> {
			this.startActivity(CartActivity.newIntent(this));
		});
	}
	
	public void onChickenRicePressed() {
	
		this.startProductDetailsActivity();
	}
	
	private void startProductDetailsActivity() {
	
		this.startActivity(ProductDetailsActivity.newIntent(this));
	}
}
