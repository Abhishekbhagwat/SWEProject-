/**
 *  Created by Abhishek Bhagwat.
 */

package com.company_name.project.activity;

import android.content.Intent;
import android.widget.ImageButton;
import com.company_name.project.R;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;
import android.widget.TextView;
import android.view.View;
import android.os.Bundle;
import android.content.Context;


public class PaymentDetailsActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, PaymentDetailsActivity.class);
	}
	
	private TextView addNewCardTextView;
	private TextView expMonthTextView;
	private TextView expYearTextView;
	private TextView cardNumberTextView;
	private TextView cardOwnerTextView;
	private TextView titleTextView;
	private TextView nameTextView;
	private TextView cardOwnerTwoTextView;
	private TextView monthTextView;
	private TextView issuedTextView;
	private TextView monthTwoTextView;
	private TextView expireTextView;
	private TextView numberTextView;
	private TextView cardNumberTwoTextView;
	private ImageButton headerMenuDarkButton;
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.payment_details_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure Add New Card component
		addNewCardTextView = this.findViewById(R.id.add_new_card_text_view);
		
		// Configure Exp. Month component
		expMonthTextView = this.findViewById(R.id.exp_month_text_view);
		
		// Configure Exp. Year component
		expYearTextView = this.findViewById(R.id.exp_year_text_view);
		
		// Configure Card Number component
		cardNumberTextView = this.findViewById(R.id.card_number_text_view);
		
		// Configure Card Owner component
		cardOwnerTextView = this.findViewById(R.id.card_owner_text_view);
		
		// Configure Title component
		titleTextView = this.findViewById(R.id.title_text_view);
		
		// Configure Name component
		nameTextView = this.findViewById(R.id.name_text_view);
		
		// Configure Card Owner component
		cardOwnerTwoTextView = this.findViewById(R.id.card_owner_two_text_view);
		
		// Configure Month component
		monthTextView = this.findViewById(R.id.month_text_view);
		
		// Configure Issued component
		issuedTextView = this.findViewById(R.id.issued_text_view);
		
		// Configure Month component
		monthTwoTextView = this.findViewById(R.id.month_two_text_view);
		
		// Configure Expire component
		expireTextView = this.findViewById(R.id.expire_text_view);
		
		// Configure Number component
		numberTextView = this.findViewById(R.id.number_text_view);
		
		// Configure Card Number component
		cardNumberTwoTextView = this.findViewById(R.id.card_number_two_text_view);
		
		// Configure Header Menu dark component
		headerMenuDarkButton = this.findViewById(R.id.header_menu_dark_button);
		headerMenuDarkButton.setOnClickListener((view) -> {
	this.onHeaderMenuDarkPressed();
});
	}
	
	public void onHeaderMenuDarkPressed() {
	
		this.startNavigationMenuActivity();
	}
	
	private void startNavigationMenuActivity() {
	
		this.startActivity(NavigationMenuActivity.newIntent(this));
	}
}
